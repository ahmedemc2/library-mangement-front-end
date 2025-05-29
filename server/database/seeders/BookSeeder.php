<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $badges = ['HOT', '20% OFF', '30% OFF'];
        $categories = ['Fiction', 'Novel', 'Science Fiction', 'Fantasy', 'Non-fiction', 'Genre Fiction', 'Mystery', 'Thriller', 'Young Adult', 'Romance', 'Horror'];

        $books = [
            [
                'title' => 'The Last Horizon',
                'isbn' => '978-1-23456-789-7',
                'published_date' => '2012-06-15',
                'author_id' => 1,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 15.99,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Mystery of the Forgotten Island',
                'isbn' => '978-1-11111-111-1',
                'published_date' => '2018-03-22',
                'author_id' => 2,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 12.50,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Love in the Rain',
                'isbn' => '978-1-22222-222-2',
                'published_date' => '2020-11-08',
                'author_id' => 3,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 9.99,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Infinite Loop',
                'isbn' => '978-1-33333-333-3',
                'published_date' => '2016-09-30',
                'author_id' => 4,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 19.95,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Shadow of the Throne',
                'isbn' => '978-1-44444-444-4',
                'published_date' => '2019-01-13',
                'author_id' => 5,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 22.00,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Beyond the Facts',
                'isbn' => '978-1-55555-555-5',
                'published_date' => '2010-07-01',
                'author_id' => 6,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 17.30,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Haunted Library',
                'isbn' => '978-1-66666-666-6',
                'published_date' => '2021-10-31',
                'author_id' => 7,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 13.75,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Secret Heir',
                'isbn' => '978-1-77777-777-7',
                'published_date' => '2015-04-19',
                'author_id' => 8,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 14.90,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Stars and Dust',
                'isbn' => '978-1-88888-888-8',
                'published_date' => '2013-02-10',
                'author_id' => 9,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 21.40,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Echoes of Time',
                'isbn' => '978-1-99999-999-9',
                'published_date' => '2017-08-05',
                'author_id' => 10,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 16.60,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Quiet Mind',
                'isbn' => '978-2-11111-111-1',
                'published_date' => '2009-05-20',
                'author_id' => 1,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 11.80,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Hearts Entwined',
                'isbn' => '978-2-22222-222-2',
                'published_date' => '2014-02-14',
                'author_id' => 2,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 10.00,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Teen Code',
                'isbn' => '978-2-33333-333-3',
                'published_date' => '2022-09-01',
                'author_id' => 3,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 13.20,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Dark Corners',
                'isbn' => '978-2-44444-444-4',
                'published_date' => '2011-03-03',
                'author_id' => 4,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 18.00,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Code of Shadows',
                'isbn' => '978-2-55555-555-5',
                'published_date' => '2013-12-24',
                'author_id' => 5,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 15.50,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Secret Gardeners',
                'isbn' => '978-2-66666-666-6',
                'published_date' => '2008-04-12',
                'author_id' => 6,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 12.25,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Wired Truth',
                'isbn' => '978-2-77777-777-7',
                'published_date' => '2023-01-01',
                'author_id' => 7,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 17.80,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Run Until Dawn',
                'isbn' => '978-2-88888-888-8',
                'published_date' => '2021-07-07',
                'author_id' => 8,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 14.30,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'Rise of the Phoenix',
                'isbn' => '978-2-99999-999-9',
                'published_date' => '2016-06-06',
                'author_id' => 9,
                'category' => $categories[array_rand($categories)],
                'status' => 'BORROWED',
                'price' => 20.00,
                'badge' => $badges[array_rand($badges)]
            ],
            [
                'title' => 'The Lost Pages',
                'isbn' => '978-3-00000-000-0',
                'published_date' => '2019-09-09',
                'author_id' => 10,
                'category' => $categories[array_rand($categories)],
                'status' => 'AVAILABLE',
                'price' => 16.45,
                'badge' => $badges[array_rand($badges)]
            ],
        ];



        foreach ($books as $book) {
            Book::create($book);
        }

    }
}
