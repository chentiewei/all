<?php
	header("Context-Type:text/plain");
	$uname=$_REQUEST['uname'];
	$conn=mysqli_connect('127.0.0.1','root','','xiaomi',3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="SELECT userName FROM user_message WHERE useName='$uname'";
	$result=mysqli_query($conn,$sql);
	if($s=mysqli_fetch_assoc($result)!=null){
		echo 'cunzai';
	}else{
		echo 'bucunzai';
	}