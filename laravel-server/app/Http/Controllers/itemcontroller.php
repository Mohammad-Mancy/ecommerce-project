<?php

namespace App\Http\Controllers;

use Auth;
use Validator;
use App\models\items;
use Illuminate\Http\Request;
use App\Models\categories;
use App\Models\favourites;
use App\Models\User;

class itemcontroller extends Controller
{
    
    public function getAllItems($id = null){
        if(auth()->user()){
            $array_items=[];
            if($id != null){
                $item = Items::find($id);
                array_push($array_items,$item);
            }
            else{
                    $cats = items::addSelect(['categoryName' => categories::select('category')
                    ->whereColumn('cat_id', 'categories.id')])->get();
                }
                
                return response()->json([
                    "status" => "Success",
                    "items" => $cats->groupBy('categoryName'),
                ], 200);
            }
            
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        }   


    public function addItem(Request $request){

        if(auth()->user()){
            $item = new items;
            $item->item_name = $request->item_name;
            $item->cat_id = $request->cat_id;
            $item->price = $request->price;
            $item->image = $request->image;
            $item->save();
            
            return response()->json([
                "status" => "Success"
            ], 200);
        }      
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function getAllCategories($id = null){
        if(auth()->user()){
        if($id != null){
            $category = categories::find($id);
        }else{
            $category = categories::all();
        }
        
        return response()->json([
            "status" => "Success",
            "categories" => $category
        ], 200);
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function addCategory(Request $request){
        if(auth()->user()){
            $category = new categories;
            $category->category = $request->category;
            $category->save();
            
            return response()->json([
                "status" => "Success"
            ], 200);
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    //add like function
    public function getLike($id=null){
        if(auth()->user()){
            if($id != null){
                $favorite = favourites::find($id);
            }else{
                $favorite = favourites::all();
            }
            
            return response()->json([
                "status" => "Success",
                "favorite" => $favorite
            ], 200);
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    //add like
    public function addLike(Request $request){
        if(auth()->user()){
            $favourite = new favourites;
            $favourite->user_id = $request->user_id;
            $favourite->item_id = $request->item_id;
            $favourite->favourite = $request->favourite;
            $favourite->save();

            return response()->json([
                "status" => "Success"
            ], 200);
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    public function deleteLike(Request $request){
        if(auth()->user()){
            favourites::where('user_id', '=', $request->user_id)->Where('item_id', '=', $request->item_id)->delete();
            return response()->json([
                "status" => "Success"
            ], 200);
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
