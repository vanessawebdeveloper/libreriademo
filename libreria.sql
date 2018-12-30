-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: 09 apr, 2013 at 07:42 PM
-- Versione MySQL: 5.1.44
-- Versione PHP: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `biblioteca`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `gestione libreria`
--

CREATE TABLE IF NOT EXISTS `gestionelibreria` (
  `isbn` int(13) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) NOT NULL,
  `titolo` varchar(50) NOT NULL,
  `autore` varchar(50) NOT NULL,
  `anno` YEAR(4) NOT NULL,
  `prezzo`FLOAT(4) NOT NULL,
  `scaffale` varchar(50) NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `gestionelibreria`
--

INSERT INTO `Sql434371_3`.`gestionelibreria` (
`categoria` ,
`titolo` ,
`autore` ,
`anno` ,
`prezzo` ,
`scaffale`
)
VALUES (
'I grandi Classici', 'Promessi Sposi', 'Alessandro Manzoni', '1995', '15.20', 'SCAF3B'
),
 (
'Giocare con l''arte', 'I laboratori tattili', 'Bruno Munari', '1985', '28.99', 'SCAF10F'
),
(
'Idee per insegnare', 'Leggere e scrivere la scienza', ' Beatrice Peruffo', '2010', '26.79', 'SCAF10G'
);
