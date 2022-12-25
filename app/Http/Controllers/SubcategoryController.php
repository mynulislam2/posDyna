<?php

namespace App\Http\Controllers;

use App\Models\Subcategories;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubcategoryController extends Controller
{
   public function addsubcategory(Request $request){

    $request->validate([
        'subcategory_name' => 'required',
        'category_id' => 'required',
        'product_name' => 'required',
        'subcategory_code' => 'required',
        'subcategory_img' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048'
    ]);

   $exists = Subcategories::where('product_name',$request->product_name)->exists();
   if($exists){

    return  response()->json([

        'errorcode' => 0,
        'message' => "This Product Is Already Exists!",
        'data' => [],

       ]);


   }else{

    if($request->has('subcategory_img')){
        $subcategory_img = $request->subcategory_img;
        $name = time().".".$subcategory_img->getClientOriginalExtension();
        $path = public_path('uploads');
        $subcategory_img->move($path,$name);
    }

    $addCategory = Subcategories::create([
        'subcategory_name' => $request->subcategory_name,
        'category_id' => $request->category_id,
        'product_name' => $request->product_name,
        'subcategory_code' => $request->subcategory_code,
        'user_id' =>  $request->user_id,
        'subcategory_img'=> $name,
        'created_at' => Carbon::now(),
       ]);

    return  response()->json([

        'errorcode' => 1,
        'message' => "Subcategory Added Successfully!",
        'data' => $addCategory

       ]);

   }


    }

    public function listsubcategory(){

        $listCategory = Subcategories::all();

        // return $listCategory;

      return response()->json([
        'errorcode' => 1,
        'message' => "List of SubCategories",
        'data' => $listCategory,
      ]);

    }
}
