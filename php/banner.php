<?php  
	include "conn.php";
	if(iseset($_GET['sid'])){
		$sid=$_GET['sid']
	}
	$result=mysql_query("select * from main");
	$piclist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
		
	}
	echo json_encode($piclist);
	mysql_close($conn);
?>