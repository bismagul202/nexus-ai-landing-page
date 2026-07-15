<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('client_name')
                    ->required(),
                TextInput::make('client_designation')
                    ->required(),
                TextInput::make('client_company'),
FileUpload::make('client_avator')
                ->image()
                ->imageEditor()
                ->directory('testimonial')
                ->disk('public')
                ->required(),

                Textarea::make('review')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('rating')
                    ->required()
                    ->numeric()
                    ->default(5)
                    ->maxValue(5),
                Toggle::make('is_active')
                    ->default(true),
            ]);
    }
}
