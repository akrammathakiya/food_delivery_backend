import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let CartData = await userData.CartData || {};
        if (!CartData[req.body.itemId]) {
            CartData[req.body.itemId] = 1;
        }
        else{
            CartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{CartData});

        res.json({
            success: true,
            message: "Added To Cart"
        });
    } catch (error) {
        console.log(error);
        res.json({
          success: false,
          message: "Error cart",
        });        
    }
};

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let CartData = userData.CartData;

    if (CartData[req.body.itemId] > 0) {
      CartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { CartData });

    res.json({
      success: true,
      message: "Removed From Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};


//fetxh user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let CartData = await userData.CartData;
    res.json({
      success: true,
      CartData
    })
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error"
    })
  }
};

export{addToCart,removeFromCart,getCart}