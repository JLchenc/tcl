<?php 
	header('content-type:text/html;charset="utf-8"');
	$conn=@mysql_connect('10.31.162.186','root','');
	if(!$conn){
		die('数据库连接有问题:'.mysql_error());
	}
	mysql_select_db('table');
	mysql_query('SET NAMES UTF8');

?>