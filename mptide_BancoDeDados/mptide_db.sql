-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 08-Maio-2018 às 21:16
-- Versão do servidor: 5.6.34
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mptide_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `log_general`
--

CREATE TABLE `log_general` (
  `id_lg` int(11) NOT NULL,
  `action_lg` char(6) NOT NULL,
  `date_lg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `licence_lg_fk` char(17) DEFAULT NULL,
  `mk_lg_fk` int(11) DEFAULT NULL,
  `user_lg_fk` int(11) DEFAULT NULL,
  `tour_lg_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `master_key`
--

CREATE TABLE `master_key` (
  `id_mk` int(11) NOT NULL,
  `name_mk` varchar(50) NOT NULL,
  `email_mk` varchar(40) NOT NULL,
  `pass_mk` char(20) NOT NULL,
  `cnpj_mk` char(18) DEFAULT NULL,
  `ddd_mk` varchar(3) DEFAULT NULL,
  `contact_mk` char(11) DEFAULT NULL,
  `active_mk` int(1) NOT NULL DEFAULT '0',
  `date_mk` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `licence_mk` char(17) NOT NULL DEFAULT '00000-00000-00000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(50) NOT NULL,
  `email_user` varchar(40) NOT NULL,
  `pass_user` char(20) NOT NULL,
  `ddd_user` varchar(3) DEFAULT NULL,
  `contact_user` char(11) DEFAULT NULL,
  `cep_user` char(9) DEFAULT NULL,
  `cpf_user` char(14) DEFAULT NULL,
  `date_user` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `licence_user_fk` char(17) DEFAULT NULL,
  `mk_user_fk` int(11) DEFAULT NULL,
  `active_user` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_tour`
--

CREATE TABLE `user_tour` (
  `id_tour` int(11) NOT NULL,
  `title_tour` varchar(30) NOT NULL,
  `desc_tour` varchar(150) DEFAULT NULL,
  `sphere_tour` longtext NOT NULL,
  `arrow_tour` longtext,
  `pin_tour` longtext,
  `blueprint_tour` varchar(140) DEFAULT NULL,
  `option_us_tour` char(17) NOT NULL,
  `date_tour` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `active_tour` int(1) NOT NULL DEFAULT '0',
  `user_tour_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log_general`
--
ALTER TABLE `log_general`
  ADD PRIMARY KEY (`id_lg`),
  ADD KEY `log_general_ibfk_1` (`licence_lg_fk`,`mk_lg_fk`),
  ADD KEY `log_general_ibfk_2` (`user_lg_fk`),
  ADD KEY `log_general_ibfk_3` (`tour_lg_fk`);

--
-- Indexes for table `master_key`
--
ALTER TABLE `master_key`
  ADD PRIMARY KEY (`id_mk`) USING BTREE,
  ADD UNIQUE KEY `licence_mk` (`licence_mk`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `user_ibfk_1` (`licence_user_fk`,`mk_user_fk`) USING BTREE;

--
-- Indexes for table `user_tour`
--
ALTER TABLE `user_tour`
  ADD PRIMARY KEY (`id_tour`),
  ADD KEY `id_user` (`user_tour_fk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log_general`
--
ALTER TABLE `log_general`
  MODIFY `id_lg` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_key`
--
ALTER TABLE `master_key`
  MODIFY `id_mk` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_tour`
--
ALTER TABLE `user_tour`
  MODIFY `id_tour` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `log_general`
--
ALTER TABLE `log_general`
  ADD CONSTRAINT `log_general_ibfk_1` FOREIGN KEY (`licence_lg_fk`,`mk_lg_fk`) REFERENCES `master_key` (`licence_mk`, `id_mk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `log_general_ibfk_2` FOREIGN KEY (`user_lg_fk`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `log_general_ibfk_3` FOREIGN KEY (`tour_lg_fk`) REFERENCES `user_tour` (`id_tour`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`licence_user_fk`,`mk_user_fk`) REFERENCES `master_key` (`licence_mk`, `id_mk`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `user_tour`
--
ALTER TABLE `user_tour`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`user_tour_fk`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
