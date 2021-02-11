<?php
$config = require 'config.php';
    
require 'classes/connection.php';
$db = Connection::connect($config['database']);

require 'classes/QueryBuilder.php';
    
$query = new QueryBuilder($db);
    