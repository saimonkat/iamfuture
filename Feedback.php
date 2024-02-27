<?php

declare(strict_types=1);

use JetBrains\PhpStorm\NoReturn;

class Feedback
{
    private array $errors = [];
    private const RECIPIENTS = 'hello@iamfuture.club, stuart.currie2313@gmail.com';
    private const ALLOWED_FIELDS = [
        'subject' => [
            'title' => 'Subject',
            'required' => false,
        ],
        'name' => [
            'title' => 'Name',
            'required' => false,
        ],
        'email' => [
            'title' => 'E-mail',
            'required' => true,
        ],
        'message' => [
            'title' => 'Message',
            'required' => false,
        ],
    ];

    #[NoReturn] public function __construct(array $fields){
        $validatedFields = $this->validateFields($fields);
        echo json_encode($this->sendMail($validatedFields));
        exit();
    }

    private function validateFields(array $fields): array
    {
        $validFields = [];
        foreach (self::ALLOWED_FIELDS as $key => $data){
            if ($data['required'] && empty($fields[$key])){
                $this->errors[] = "The field '{$data['title']}' is required";
                continue;
            }

            $validFields[$data['title']] = $fields[$key];
        }

        return $validFields;
    }

    private function buildMailBody(array $fields): string
    {
        $body = '<ul>';

        foreach ($fields as $fieldTitle => $fieldValue){
            $fieldValue = $fieldValue ?: '-';
            $body .= "<li><b>{$fieldTitle}: </b>{$fieldValue}</li>";
        }

        $body .= '<ul>';

        return $body;
    }

    private function sendMail(array $fields = []): array
    {
        if (!empty($this->errors)){
            return ['errors' => $this->errors];
        }

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: <noreply@iamfuture.finance>' . "\r\n";
        #$headers .= 'Bcc: <astamiir@gmail.com>' . "\r\n";

        $sent = mail(
            self::RECIPIENTS,
            'Feedback (iamfuture.finance)',
            $this->buildMailBody($fields),
            $headers
        );

        if ($sent){
            return ['success' => 'The message has been sent successfully'];
        } else {
            return ['errors' => ['An error occurred while sending the message']];
        }
    }
}

$fields = array_key_first($_POST) ?? '[]';
$fields = json_decode($fields, true);

new Feedback($fields);