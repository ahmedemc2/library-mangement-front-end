<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Author;
use App\Models\Book;

class BookFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Book::class;

    /**
     * Define the model's default state.
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'isbn' => $this->faker->unique()->isbn13,
            'published_date' => $this->faker->dateTimeBetween('-30 years', 'now'),
            'author_id' => Author::factory(),
            'status' => $this->faker->randomElement(['AVAILABLE', 'BORROWED']),
            'price' => $this->faker->randomFloat(2, 5, 100),
            'badge' => $this->faker->randomElement(['HOT', '20% OFF', '30% OFF']),
        ];
    }
}
