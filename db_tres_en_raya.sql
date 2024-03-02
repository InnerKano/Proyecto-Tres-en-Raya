-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2024 a las 23:38:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tres_en_raya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ganadores`
--

CREATE TABLE `ganadores` (
  `id_ganador` int(11) NOT NULL,
  `partida_id` int(11) NOT NULL,
  `jugador_id` int(11) NOT NULL,
  `puntuacion_acumulada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ganadores`
--

INSERT INTO `ganadores` (`id_ganador`, `partida_id`, `jugador_id`, `puntuacion_acumulada`) VALUES
(1, 1, 1, 4),
(2, 2, 3, 6),
(3, 3, 5, 7),
(4, 4, 8, 10),
(5, 5, 10, 11),
(6, 6, 3, 7),
(7, 7, 5, 8),
(8, 8, 7, 8),
(9, 9, 6, 8),
(10, 10, 10, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `id_jugador` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `puntuacion` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`id_jugador`, `nombre`, `puntuacion`) VALUES
(1, 'Juan', 3),
(2, 'María', 5),
(3, 'Pedro', 7),
(4, 'Ana', 4),
(5, 'Luis', 6),
(6, 'Sofía', 8),
(7, 'Carlos', 2),
(8, 'Laura', 9),
(9, 'David', 1),
(10, 'Elena', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidas`
--

CREATE TABLE `partidas` (
  `id_partida` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `jugador1_id` int(11) NOT NULL,
  `jugador2_id` int(11) NOT NULL,
  `ganador_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidas`
--

INSERT INTO `partidas` (`id_partida`, `fecha`, `jugador1_id`, `jugador2_id`, `ganador_id`) VALUES
(1, '2024-01-01', 1, 2, 1),
(2, '2024-01-02', 3, 4, 3),
(3, '2024-01-03', 5, 6, 5),
(4, '2024-01-04', 7, 8, 8),
(5, '2024-01-05', 9, 10, 10),
(6, '2024-01-06', 1, 3, 3),
(7, '2024-01-07', 2, 5, 5),
(8, '2024-01-08', 4, 7, 7),
(9, '2024-01-09', 6, 9, 6),
(10, '2024-01-10', 8, 10, 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ganadores`
--
ALTER TABLE `ganadores`
  ADD PRIMARY KEY (`id_ganador`),
  ADD KEY `partida_id` (`partida_id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id_jugador`);

--
-- Indices de la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD PRIMARY KEY (`id_partida`),
  ADD KEY `jugador1_id` (`jugador1_id`),
  ADD KEY `jugador2_id` (`jugador2_id`),
  ADD KEY `ganador_id` (`ganador_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ganadores`
--
ALTER TABLE `ganadores`
  MODIFY `id_ganador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id_jugador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `partidas`
--
ALTER TABLE `partidas`
  MODIFY `id_partida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ganadores`
--
ALTER TABLE `ganadores`
  ADD CONSTRAINT `ganadores_ibfk_1` FOREIGN KEY (`partida_id`) REFERENCES `partidas` (`id_partida`),
  ADD CONSTRAINT `ganadores_ibfk_2` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`id_jugador`);

--
-- Filtros para la tabla `partidas`
--
ALTER TABLE `partidas`
  ADD CONSTRAINT `partidas_ibfk_1` FOREIGN KEY (`jugador1_id`) REFERENCES `jugadores` (`id_jugador`),
  ADD CONSTRAINT `partidas_ibfk_2` FOREIGN KEY (`jugador2_id`) REFERENCES `jugadores` (`id_jugador`),
  ADD CONSTRAINT `partidas_ibfk_3` FOREIGN KEY (`ganador_id`) REFERENCES `jugadores` (`id_jugador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
