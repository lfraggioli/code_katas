<?php

function sum(array $a): float
{

    $suma = 0;

    for ($i = 0; $i < count($a); $i++) {
        $suma += $a[$i];
    }

    return $suma;
}
