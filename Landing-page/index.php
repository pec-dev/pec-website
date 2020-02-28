<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Computer Science & Engineering</title>
        <link rel="stylesheet" href="css/bootstrap4.css">
        <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/footer.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/master.css">
        <link rel="stylesheet" href="css/navbar.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">

    </head>
    <body>
        <section class="cover-image" id="snap">
            <div class="cover-dept-name">
                <h4 class="dept-of cover-dept-of">DEPARTMENT <i>of</i></h4>
                <h4 class="dept-name-text cover-dept-text">Computer Science and Engineering</h4>
            </div>
            <button id="butt" class="butt" onclick="snap()">&DownArrow;</button>

        </section>
        <?php
            include "header/header.html";
        ?>
        <main>
            <div style="display:flex;justify-content: center;position: relative;" width="100%" id="main-container">
                <img id="dept-image" src="img/landing-img/cse.png" >
                <div class="contain" >
                    <div class="flex-container justify-content-center">
                        <div class="nav_items">Notice & Updates</div>
                        <div class="nav_items">Articles</div>
                        <div class="nav_items">Overviews</div>
                        <div class="nav_items">Faculties</div>
                        <div class="nav_items">Courses & Curriculum</div>
                    </div>
                </div>
                
            </div>
        
            <div class="date-container">
                <hr class="hr2">
                <div id="date"></div>
                <hr class="hr2">
            </div>
        </main>
        <?php
            include "footer/footer.html";
        ?>
        <script src="JS/master.js"></script>
    </body>
</html>
