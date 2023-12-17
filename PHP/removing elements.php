<?php
function removeEveryOther($array)
{
    // write your code here
    $length = count($array);
    for ($i = 1; $i < $length; $i += 2) {
        unset($array[$i]);
        array_values($array);
    }
    return $array;
}
