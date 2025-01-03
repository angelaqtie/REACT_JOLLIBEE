-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2025 at 08:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_advertisement`
--

CREATE TABLE `jollibee_advertisement` (
  `advertisement_aid` int(11) NOT NULL,
  `advertisement_is_active` tinyint(1) NOT NULL,
  `advertisement_title` varchar(30) NOT NULL,
  `advertisement_image` varchar(20) NOT NULL,
  `advertisement_datetime` varchar(20) NOT NULL,
  `advertisement_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_advertisement`
--

INSERT INTO `jollibee_advertisement` (`advertisement_aid`, `advertisement_is_active`, `advertisement_title`, `advertisement_image`, `advertisement_datetime`, `advertisement_created`) VALUES
(11, 1, 'banner1', 'slider-1.jpg', '2024-12-18 12:13:57', 2024),
(14, 1, 'banner2', 'slider-2.png', '2024-12-18 13:27:08', 2024),
(15, 1, 'banner3', 'slider-3.jpg', '2024-12-18 13:27:22', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_category`
--

CREATE TABLE `jollibee_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(20) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_category`
--

INSERT INTO `jollibee_category` (`category_aid`, `category_is_active`, `category_image`, `category_title`, `category_datetime`, `category_created`) VALUES
(14, 1, 'nav-palabok.webp', 'Palabok', '2024-12-11 14:23:47', 2024),
(15, 0, 'nav-burger.webp', 'Burger', '', 2024),
(16, 1, 'nav-spaghetti.webp', 'Spaghetti', '2024-12-11 15:03:58', 2024),
(17, 1, 'nav-sides.webp', 'Fries & Sides', '2024-12-11 15:04:12', 2024),
(19, 1, 'nav-value-meal.webp', 'Value Meals', '2024-12-11 15:04:29', 2024),
(20, 1, 'steak-1.webp', 'Burger Steak', '2024-12-11 15:22:37', 2024),
(21, 1, 'nav-desserts.webp', 'Desserts', '2024-12-11 15:05:17', 2024),
(22, 1, 'nav-chickenjoy.webp', 'Chickenjoy', '2024-12-11 15:06:25', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_food` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` int(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_food` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(10, 1, 'nav-burger.webp', 'Burger', 120, 15, 0, 2024),
(11, 0, 'burger-2.webp', 'Burger w/ Fries', 180, 15, 0, 2024),
(12, 1, 'burger-6.webp', 'Double Patties Yum Burger w/ f', 240, 15, 2024, 2024),
(13, 1, 'chicken-1.webp', '2pc Chickenjoy', 189, 22, 2024, 2024),
(14, 1, 'chicken-6.webp', '8pcs Chickenjoy Bucket', 690, 22, 2024, 2024),
(15, 1, 'chicken-4.webp', '6pcs Chickenjoyy w/ Spaghetti ', 950, 22, 2024, 2024),
(16, 1, 'dessert-1.webp', 'Peach Macho Pie', 45, 21, 2024, 2024),
(17, 1, 'dessert-2.webp', 'Ube Pie', 45, 21, 2024, 2024),
(18, 0, 'dessert-3.webp', '3pcs Peach Mango Pie', 120, 21, 0, 2024),
(19, 1, 'palabok-1.webp', 'Palabok', 60, 14, 2024, 2024),
(20, 1, 'palabok-2.webp', 'Palabok w/ drinks', 120, 14, 2024, 2024),
(21, 1, 'palabok-3.webp', 'Palabok Family Pan', 230, 14, 2024, 2024),
(22, 1, 'sides-1.webp', 'Fries', 49, 17, 2024, 2024),
(23, 1, 'sides-2.webp', 'Mashed Potato', 45, 17, 2024, 2024),
(24, 1, 'sides-3.webp', 'Plain Rice', 35, 17, 2024, 2024),
(25, 1, 'spag-2.webp', 'Spaghetti w/ 1pc chicken', 99, 16, 2024, 2024),
(26, 1, 'spag-3.webp', 'Spaghetti Family Pan', 120, 16, 2024, 2024),
(27, 1, 'spag-1.webp', 'Spaghetti', 60, 16, 2024, 2024),
(28, 1, 'steak-1.webp', 'Triple Burger Steak', 150, 20, 2024, 2024),
(29, 1, 'steak-2.webp', 'Burder Steak Family Pan', 350, 20, 2024, 2024),
(30, 1, 'steak-3.webp', 'Buirger Steack Family Bundle', 950, 20, 2024, 2024),
(31, 1, 'value-meal-3.webp', 'Value Meals 1', 215, 19, 2024, 2024),
(32, 1, 'value-meal-1.webp', 'Value Meals 2', 190, 19, 2024, 2024),
(34, 1, 'value-meal-4.webp', 'Value Meals 2', 950, 19, 0, 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_settings_role`
--

CREATE TABLE `jollibee_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_developer` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_settings_role`
--

INSERT INTO `jollibee_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`) VALUES
(11, 1, 'Developer', 'developer', '2024-12-16 15:05:53', '2025-01-02 14:05:19', 1);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_settings_user_developer`
--

CREATE TABLE `jollibee_settings_user_developer` (
  `user_developer_aid` int(11) NOT NULL,
  `user_developer_is_active` tinyint(1) NOT NULL,
  `user_developer_first_name` varchar(128) NOT NULL,
  `user_developer_last_name` varchar(128) NOT NULL,
  `user_developer_email` varchar(128) NOT NULL,
  `user_developer_new_email` varchar(128) NOT NULL,
  `user_developer_role_id` int(11) NOT NULL,
  `user_developer_key` varchar(255) NOT NULL,
  `user_developer_password` varchar(255) NOT NULL,
  `user_developer_created` datetime NOT NULL,
  `user_developer_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_settings_user_developer`
--

INSERT INTO `jollibee_settings_user_developer` (`user_developer_aid`, `user_developer_is_active`, `user_developer_first_name`, `user_developer_last_name`, `user_developer_email`, `user_developer_new_email`, `user_developer_role_id`, `user_developer_key`, `user_developer_password`, `user_developer_created`, `user_developer_datetime`) VALUES
(1, 1, 'Kiana', 'Castillo', 'kianaangelacastillo@gmail.com', '', 11, '', '$2y$10$NcP51CXKYxXqUKRn5mGyqu/PWLsdPFtPdw10fq.bY6pNTgcbxgTnq', '2025-01-02 14:42:16', '2025-01-03 13:55:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_advertisement`
--
ALTER TABLE `jollibee_advertisement`
  ADD PRIMARY KEY (`advertisement_aid`);

--
-- Indexes for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- Indexes for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `jollibee_settings_user_developer`
--
ALTER TABLE `jollibee_settings_user_developer`
  ADD PRIMARY KEY (`user_developer_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_advertisement`
--
ALTER TABLE `jollibee_advertisement`
  MODIFY `advertisement_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jollibee_settings_user_developer`
--
ALTER TABLE `jollibee_settings_user_developer`
  MODIFY `user_developer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
