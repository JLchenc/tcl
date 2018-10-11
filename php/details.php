<?php  
	
	include "conn.php";
	
	if(isset($_GET['sid'])){
		$sid=$_GET['sid'];//获取前端传入的sid
	}
	$result=mysql_query("select * from details");
	$piclist=array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
		}
	
		echo json_encode($piclist);
		mysql_close($conn);
// 	$result=mysql_query("select * from details where sid = '$sid'");
// 	
// 	$picarr=array();
// 	
// 	for ($i=0; $i < mysql_num_rows($result); $i++) { 
// 		$picarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
// 	}
// 
// 	echo json_encode($picarr);

?>