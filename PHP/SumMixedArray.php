<?php

function sum_mix($a)
{
    $suma = 0;
    foreach ($a as $valor) {
        if (is_numeric($valor)) {
            $suma += intval($valor);
        }
    }

    return $suma;
}
