<?php
  use Psr\Http\Message\ResponseInterface as Response;
  use Psr\Http\Message\ServerRequestInterface as Request;
  use Slim\Factory\AppFactory;

  require __DIR__ . '/vendor/autoload.php';

  $app = AppFactory::create();

  $app->get('/post', function (Request $request, Response $response, $args) {
    $choices = $request->getQueryParams();
    $isValid = false;
    $dbConn = new mysqli('localhost', 'root', 'toor', 'db');

    try {
      if (!$dbConn->connect_errno) {
        for ($i = 0; $i < count($choices); ++$i) {
          if (strpos(strtolower($choice), 'calculus')) {
            $isValid = true;
            break;
          }
        }
    
        if ($isValid) {
          $dbConn->query("INSERT INTO tbl (
            choice1,
            choice2,
            choice3
          )
          VALUES (
            '{$coice[0]}',
            '{$coice[1]}',
            '{$coice[2]}'
          )");
          
          $output = 'Success';
        } else {
          $output = 'Failure';
        }
      }
    } catch (Exception $err) {
      $output = 'Failure';
    }

    $response->getBody()->write($output);
    return $response;
  });

  $app->run();
?>