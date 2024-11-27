<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles.css" rel="stylesheet" type="text/css" />
    <div class=header>
        <div class=heading>
            <h2 style="color:white">News</h2>
        </div>

    </div>
</head>

<body>
    <div class=nav>
        <div class=navigation>
            <div><a href="index1.php?page=technology">Technology</a></div>
            <div><a href="index1.php?page=science">Science</a></div>
            <div><a href="index1.php?page=health">Health</a></div>
            <!-- <a href='index1.php?page=security'>Security</a> -->
        </div>
    </div>

    <div class="global_container">

    <div class="container">
        <?php
        
        // Determine the page from the query parameters, defaulting to 'technology'
        if (isset($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            $page = 'general';
        }

      
       
        // $api = "https://newsapi.org/v2/top-headlines?domain=techchrunch.com,news.google.com&language=en&category={$page}&apiKey=e128a31b4bf44be590f517ab11074981";
        $api="https://api.mediastack.com/v1/news?access_key=c96817373c55731822c8b5230476021c&categories={$page}&languages=en&limit=100";
        $response = file_get_contents($api);
        
        if ($response === FALSE) {
            echo "Error fetching data.";
        } else {
            $jsonDecode = json_decode(trim($response), TRUE);
            
            if (isset($jsonDecode['data']) && count($jsonDecode['data']) > 0) {
                echo '<div class="section">';
        
                foreach ($jsonDecode['data'] as $news) {
                    ?>
                    <div class="align">
                        <div class="image">
                            <img src="<?php echo htmlspecialchars($news['image']); ?>" alt="NO Image" onerror="this.src='alt.png'">
                        </div>
                        <div class="info">
                            <p><b>Title: <?php echo htmlspecialchars($news['title']); ?></b></p>
                            <hr class=line>
                            <p ><i>Description:</i><p class=descrip><?php echo htmlspecialchars($news['description']); ?></P></p>
                            <hr class=line>
                            <p><i>URL:</i> <a href="<?php echo htmlspecialchars($news['url']); ?>" target="_blank">More info</a></p>
                            <hr class=line>
                            <p><i>Published At:</i> <?php echo htmlspecialchars($news['published_at']); ?></p>
                        </div>
                    </div>
                    <?php
                }
                
                echo "</div>"; 
            } else {
                echo "No articles found.";
            }
        }
        ?>
        
    </div>
</div>
</body>

</html>