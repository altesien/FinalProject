<?php
// Start the session
session_start();
#$_SESSION['hassub']="no";
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width-device-width, intial-scale=1"/>
        <title>Vortex | Main</title>
        <link rel="stylesheet" href="styles/index.css" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
        <script src="js/index.js"></script>
    </head>
    <body onload="init()">
        <!-- The header bar -->
        <header class="overhead">
            <div id="logo">
                <a href ="#"><img src="icons/logo.png" alt="Vortex logo"/></a>
            </div> 
            <nav>
                <ul>
                    <li><a href="index.php" class="active">Home </a></li>
                    <li><a href="gallery.php" class="active">Gallery</a></li>
                </ul>
            </nav>
        </header>
        <!-- The main Page containing backdrop and widget -->
        <div class="backdrop">
            <div id="widgetcanvas">
                <h1 id="sample">Example Widgets</h1>

                <div class="widget" id="widget1">
                    <h2>Summary</h2>
                    <p>Click for a quick<br> summary of how to<br> get around</p>
                    <p> This website is meant to be an examplar, portfolio, or business template. 
                    While also showing of various things learned in web development. It will show
                    the client what is possible with a website of this style
                    This is where information about the company/person could go
                    a brief overview of what they do. More detailed than the
                    mission statement above.
                    </p>
                </div>
                <div class="widget" id="widget2">
                    <h2>Survey</h2>
                    <p>Click for an examplar survey<br> showing form submission</p>
                    
                    <form id='survey' method="post" action="actions/insert.php">
                        <br>
                        Here's a sample survey to gauge the audience<br>
                        visiting the website, or for suggestions about<br>
                        ideas how to improve whatever service is being<br>
                        provided.<br><br>
                        
                        Please give some information about yourself:<br>
                        
                        Gender:
                        <input type="radio" NAME="gender" VALUE="1">Male 
                        <input type="radio" NAME="gender" VALUE="2">Female <br>
                        Birthdate:
                    </form> 
                    <p>You've already completed the survey!</p>
                    
                    <!-- checks if the form has been submitted and sets the session variable
                         to yes to not allow the user to submit the survey again.
                        -->
                    <?php 
                        if (isset($_POST['submit'])) {
                            $_SESSION['hassub'] = "yes";
                        }

                    ?>
                    
                    <!-- Holds the Session variable for javascript -->
                    <input type="hidden" id="hassubmitted" value="<?php echo
                        $_SESSION['hassub']; ?>"></input>
                
                        
                    
                </div>
                <div class="widget" id="widget3">
                    <h2>Table Data</h2>
                    <p>Click for a dynamically<br> generated table</p>
                    <table>
                        <tr>
                            <th>Gender</th>
                            <th>Birthday</th>
                            <th>Comment</th>
                        </tr>
                        <tr>
                            <?php
                                  $host = 'localhost';
                                  $user = 'root';
                                  $pass = '';
                                  $dbname = 'mydb';
                                  try {
                                      $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass); 
                                      $statement = $conn->prepare("SELECT texty,gender,birthdate FROM finaldb");
                                      $statement->execute();
                                      $statement->setFetchMode(PDO::FETCH_ASSOC);  
                                      
                                      $finaldb = $statement->fetchAll();
                                      foreach ($finaldb as $row) {  
                                          echo "<tr>";
                                          echo "<td>" . $row['gender'] . "</td>"; 
                                          echo "<td>" . $row['birthdate'] . "</td>";
                                          echo "<td>" . $row['texty'] . "</td>";
                                          echo "</tr>";
                                     }

                                     $conn = null; 
                                  } catch(PDOException $e) {  
                                     echo $e->getMessage();  
                                  }
                                ?>
                        </tr>
                    </table>
                </div>
            
                <div class="widget" id="widget4">
                    <h2>Video</h2>
                    <p>Click for a video</p>
                    <iframe width="420" height="345"    src="http://www.youtube.com/embed/0WWzgGyAH6Y"></iframe>
                </div>
            </div>
        </div>        
    </body>
</html>