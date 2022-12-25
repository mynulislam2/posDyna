<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Validator as FacadesValidator;
//use Illuminate\Validation\Validator;
//use Illuminate\Validation\Factory;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request){




        $validator = Validator::make($request->all(),[
            'fname'=> 'required',
            'lname'=> 'required',
            'email'=> 'required|email',
            'phone'=> 'required|digits:11',
            'password'=> 'required',
            'cpassword'=> 'required|same:password',
        ]);



        if($validator->fails()){

            $response = [

                'success' => false,
                 'error' => $validator->errors()

            ];
            return response()->json($response);

        }
        $input = $request->all();
        $input['password'] = bcrypt( $input['password']);
        $user = User::create($input);
        $success['name'] = $user->fname;

        $response = [
            'success' => true,
            'message' => 'user Registered Successfully!',
            'data' => $success
        ];
        return response()->json($response,200);

    }
    public function login(Request $request){

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){

            $user = Auth::user();
            $success['name'] = $user->fname;
            $response = [
                'success' => true,
                'message' => 'user Logged in Successfully!',
                'data' => $success
            ];
            return response()->json($response,200);

        }else{

            $response = [
                'success' => false,
                'message' => 'Unorthorised',

            ];
            return response()->json($response);
        }

    }
}
