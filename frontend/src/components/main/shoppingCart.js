import React from 'react'
import { Container } from "@mui/material";
const ShoppingCart = () => {
  return (
      <Container>
<div class="col-sm-12 col-md-10 col-md-offset-1">
<table class="table table-hover">
<thead>
<tr>
<th>Product</th>
<th>Authorized</th>
<th>Quantity</th>
<th class="text-center">Price</th>
<th class="text-center">Total</th>
<th> </th>
</tr>
</thead>
<tbody>
<tr>
<td class="col-sm-8 col-md-6">
<div class="media">
<a class="thumbnail pull-left" href="/"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" alt="Flower" style={{width: "72px", height: "72px"}}/> </a>
<div class="media-body">
<h4 class="media-heading"><a href="/">Flower Name</a></h4>
<h5 class="media-heading"> by <a href="/">shop Name</a></h5>
<span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
</div>
</div></td>
<td class="col-md-1 text-left"><strong class="label label-danger">None</strong></td>
<td class="col-sm-1 col-md-1" style= {{textAlign: "center"}}>
<input type="email" class="form-control" id="exampleInputEmail1" value="3"/>
</td>
<td class="col-sm-1 col-md-1 text-center"><strong>$9.99</strong></td>
<td class="col-sm-1 col-md-1 text-center"><strong>$99.99</strong></td>
<td class="col-sm-1 col-md-1">
<button type="button" class="btn btn-danger">
<span class="fa fa-remove"></span> Remove
</button></td>
</tr>
<tr>
<td class="col-md-6">
<div class="media">
<a class="thumbnail pull-left " href="/"> <img class="media-object " src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/28859.png"  alt="" style={{width: "72px", height: "72px"}}/> </a>
<div class="media-body">
<h4 class="media-heading"><a href="/">Flower Name</a></h4>
<h5 class="media-heading"> by <a href="/">Shop Name</a></h5>
<span>Status:</span><span class="text-danger"><strong>Not In Stock</strong></span>
</div>
</div></td>
<td class="col-md-1 text-left"><strong class="label label-success ">Authorized</strong></td>
<td class="col-md-1" style= {{textAlign: "center"}}>
<input type="email" class="form-control" id="exampleInputEmail1" value="2"/>
</td>
<td class="col-md-1 text-center"><strong>$9.99</strong></td>
<td class="col-md-1 text-center"><strong>$9.98</strong></td>
<td class="col-md-1">
<button type="button" class="btn btn-danger">
<span class="fa fa-remove"></span> Remove
</button></td>
</tr>
<tr>
<td class="col-md-6">
<div class="media">
<a class="thumbnail pull-left" href="/"> <img class="media-object" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFLUKa1_4ANg6LBvqpz_zcCnjzVFxXk0JlSgzJnp8W9uqL0VioOGUWfw" alt="" style={{width: "72px", height: "72px"}}/> </a>
<div class="media-body">
<h4 class="media-heading"><a href="/">Flower Name</a></h4>
<h5 class="media-heading"> by <a href="/">Shop Name</a></h5>
<span>Status:</span><span class="text-success"><strong>In Stock</strong></span>
</div>
</div></td>
<td class="col-md-1 text-left"><strong class="label label-success ">Authorized</strong></td>
<td class="col-md-1" style= {{textAlign: "center"}}>
<input type="email" class="form-control" id="exampleInputEmail1" value="2"/>
</td>
<td class="col-md-1 text-center"><strong>$999.99</strong></td>
<td class="col-md-1 text-center"><strong>$999.98</strong></td>
<td class="col-md-1">
<button type="button" class="btn btn-danger">
<span class="fa fa-remove"></span> Remove
</button></td>
</tr>					
<tr>
<td>   </td>
<td>   </td>
<td>   </td>
<td><h5>Subtotal</h5></td>
<td class="text-right"><h5><strong>$999.99</strong></h5></td>
</tr>
<tr>
<td>   </td>
<td>   </td>
<td>   </td>
<td><h5>Estimated shipping</h5></td>
<td class="text-right"><h5><strong>$9.999.99</strong></h5></td>
</tr>
<tr>
<td>   </td>
<td>   </td>
<td>   </td>
<td><h3>Total</h3></td>
<td class="text-right"><h3><strong>$9.999.99</strong></h3></td>
</tr>
<tr>
<td>   </td>
<td>   </td>
<td>   </td>
<td>
<button type="button" class="btn btn-primary btn-lg">
<span class="fa fa-shopping-cart"></span> Continue Shopping
</button></td>
<td>
<button type="button" class="btn btn-success btn-lg">
Checkout <span class="fa fa-play"></span>
</button></td>
</tr>
</tbody>
</table>
</div>
</Container>
  )
}

export default ShoppingCart;