<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\BorrowRecord;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Author::factory(10)->create();
        $this->call(BookSeeder::class);
        BorrowRecord::factory(20)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


    }
}
