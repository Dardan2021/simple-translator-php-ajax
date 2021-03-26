<?php

$conn=mysqli_connect("localhost:3307","root","","traduction");

$active1=$_POST['active1'];
$active2=$_POST['active2'];
$textareas=$_POST['textareas'];
$result=["tran"=>array(),"icon"=>"","suggestion"=>array(),"suggestionLan"=>""];
$issuccess=false;
$sp='/ /';
$active1A=array();
$setOfwords=preg_split($sp, $textareas);
$sql="Select ".$active1." AS active1, ".$active2." AS active2 FROM content";
$query=mysqli_query($conn,$sql);
//$num=mysqli_num_rows( $query);
while($r = mysqli_fetch_array($query)){
    if(!empty($textareas)){
        foreach($setOfwords as $words  => $value){

            array_push($active1A,$r["active1"]);
            foreach($active1A as $v){
                if(strpos($v,$value) !== false){
                    array_push( $result["suggestion"],"<li id='".$v."'>".$v."</li>");
                }
                
                   
                
            }
        
            if($r["active1"] == $value){
                
            array_push($result["tran"],$r["active2"]);
                $issuccess=true;
                
            }
      
    }
    }
}
 $sql2="Select * FROM content ";
  $query2=mysqli_query($conn,$sql2);
  while($r2 = mysqli_fetch_array($query2)){
       $Languages=["English","italian","German","Franch","Shqip"];
     foreach($Languages as $lan ){
         if((preg_match("/{$r2[$lan]}/i",$textareas))&& ( $lan != $active1)){
               $result['suggestionLan']=$lan;
        }
      }
  }
if($issuccess==true){
   $result["icon"]="<span> <i class='fas fa-check'></i> </span>";
} 
echo json_encode($result);

?>