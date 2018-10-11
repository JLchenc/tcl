<?php
	header('content-type:text/html;charset=utf-8');
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOST,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}

	//2.选择数据库,设置字符集
	mysql_select_db('table');
	mysql_query('set names utf8');
// 	$result=mysql_query("select * from details");
// 	$piclist=array();
// 		for($i=0;$i<mysql_num_rows($result);$i++){
// 			$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
// 		}
// 	
// 		echo json_encode($piclist);
// 		mysql_close($conn);
?>