<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$parents = new Parents($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("parentsid", $_GET)) {
  $parents->parents_aid = $_GET['parentsid'];
  checkId($parents->parents_aid);
  $query = checkReadById($parents);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($parents);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();