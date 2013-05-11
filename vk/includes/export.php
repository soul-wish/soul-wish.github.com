<?php

require_once('includes/VK.php');

$vk_config = array(
    'app_id'        => '3639124',
    'api_secret'    => '9rdG7MRbWtlsIPkkY0wM'
);

try {
    $vk = new VK($vk_config['app_id'], $vk_config['api_secret']);
    
    $users = $vk->api('friends.get', array(
    	'uid' => '6627981',
    	'fields' => 'first_name, last_name, bdate'));
        
    foreach ($users['response'] as $user) {
    	print_r($user);
        echo '<br />';
    }
    
} catch (VKException $error) {
    echo $error->getMessage();
}