-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 14 2020 г., 19:07
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `crud`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Characters`
--

CREATE TABLE `Characters` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Characters`
--

INSERT INTO `Characters` (`id`, `title`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'THE MANDALORIAN', 'His body is shielded by beskar armor, his face hidden behind a T-visored mask, and his past is wrapped in mystery. No one is quite sure who this well-equipped stranger is. The Mandalorian is battle-worn and tight-lipped, a formidable bounty hunter in an increasingly dangerous galaxy.', 'https://lumiere-a.akamaihd.net/v1/images/mandalorian-databank_9914915c.jpeg?region=160%2C0%2C960%2C540&width=600', '2020-10-11 12:04:43', '2020-10-11 12:04:43'),
(2, 'CHEWBACCA', 'A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.', 'https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=131%2C0%2C951%2C536&width=600', '2020-10-11 12:04:43', '2020-10-11 12:04:43'),
(3, 'LUKE SKYWALKER', 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.', 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768', '2020-10-11 12:04:43', '2020-10-11 12:04:43'),
(4, 'YODA', 'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.', 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768', '2020-10-11 12:04:43', '2020-10-11 12:04:43'),
(5, 'DARTH VADER', 'Once a heroic Jedi Knight, Darth Vader was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…', 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=600', '2020-10-12 21:05:43', '2020-10-12 21:05:43'),
(21, 'test', 'test', 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=600', '2020-10-14 17:02:53', '2020-10-14 17:02:53');

-- --------------------------------------------------------

--
-- Структура таблицы `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `characters`
--

INSERT INTO `characters` (`id`, `title`, `description`, `image`) VALUES
(1, 'CHEWBACCA', 'A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.', 'https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=131%2C0%2C951%2C536&width=600'),
(2, 'THE MANDALORIAN', 'His body is shielded by beskar armor, his face hidden behind a T-visored mask, and his past is wrapped in mystery. No one is quite sure who this well-equipped stranger is. The Mandalorian is battle-worn and tight-lipped, a formidable bounty hunter in an increasingly dangerous galaxy.', 'https://lumiere-a.akamaihd.net/v1/images/mandalorian-databank_9914915c.jpeg?region=160%2C0%2C960%2C540&width=600'),
(3, 'LUKE SKYWALKER', 'Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.', 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768'),
(4, 'YODA', 'Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality.', 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=768');

-- --------------------------------------------------------

--
-- Структура таблицы `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20201010232054-crud.js'),
('20201010233208-create-characters.js');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Characters`
--
ALTER TABLE `Characters`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Characters`
--
ALTER TABLE `Characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
