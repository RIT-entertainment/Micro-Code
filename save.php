<?php

if(isset($_POST['submit']))
{
	$name=$_POST['name'];
	$age=$_POST['age'];
	echo $name ." ".$age ;
	$con=odbc_connect("abc","", "");
	$sql="INSERT INTO abc (name,age) VALUES ('$name','$age')";
	if(odbc_exec($con,$sql))
	{
		echo "<br>Data saved<br>Please Wait Page redirect..";
		header("refresh:1;url=index.php");
	}
	else
	{
		echo "Error";
	}
}
?>