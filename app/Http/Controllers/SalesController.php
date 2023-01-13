<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Models\Sales;
use Illuminate\Http\Request;
use App\Http\Requests\StoreSalesRequest;
use App\Http\Requests\UpdateSalesRequest;
use Illuminate\Support\Facades\Validator;
class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSalesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $validation = Validator::make($request->all(),[

            'referenceNo' =>['required'],
            'biller'=>['required'],
            'customer'=>['required'],
            'orderTax'=>['required'],
            'discountType'=>['required'],
            'orderDiscount'=>['required'],
            'shippingCharge'=>['required'],
            'shippingAddress'=>['required'],
            'document'=>['nullable','image','file','mimes:jpg,png,pdf,jpeg,gif,svg','max:2048'],
            'saleStatus'=>['required'],
            'paymentStatus'=>['required'],
        ]);


        if($validation->fails()){

            $response = [

                'success' => false,
                 'error' => $validation->errors()

            ];
            return response()->json($response);

        }

            $exists = Sales::where('referenceNo',$request->referenceNo)->exists();
            if($exists){

             return  response()->json([

                 'errorcode' => 0,
                 'message' => "This Sales Is Already Exists!",
                 'data' => [],

                ]);


            }else{

             if($request->has('document')){
                 $document = $request->document;
                 $name = time().".".$document-> getClientOriginalExtension();
                 $path = public_path('uploads/documents');
                 $document->move($path,$name);
             }

             $addSales = Sales::create([
                 'date' => Carbon::now(),
                 'referenceNo' =>$request->referenceNo,
                 'biller' =>  $request->biller,
                 'customer' => $request->customer,
                 'orderTax' => $request->orderTax,
                 'discountType' => $request->discountType,
                 'orderDiscount' => $request->orderDiscount,
                 'shippingCharge' => $request->shippingCharge,
                 'shippingAddress' => $request->shippingAddress,
                 'document' =>$name,
                 'saleStatus' => $request->saleStatus,
                 'paymentStatus' => $request->paymentStatus,
                 'saleNote' => $request->saleNote,


               ]);

               return response()->json([

                 'errorcode' => 1,
                 'message' => "Sales Added Successfully !",
                 'data' => $addSales

                ]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show(Sales $sales)
    {
       $sales = Sales::all();
       return response()->json([
        'errorcode' => 1,
        'message' => "List of Sales",
        'data' =>$sales ,
      ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function edit(Sales $sales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSalesRequest  $request
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSalesRequest $request, Sales $sales)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sales $sales)
    {
        //
    }
}
