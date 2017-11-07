<?php
	header("Context-Type:text/plain");
	$uname=$_REQUEST['uname'];
	$pwd=$_REQUEST["pwd"];
	$conn=mysqli_connect('127.0.0.1','root','','xiaomi',3306);
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
	$sql="INSERT INTO user_message VALUES(null,'$uname','$pwd')";
	mysqli_query($conn,$sql);
	