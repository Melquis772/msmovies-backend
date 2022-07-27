const { Router } = require('express');
const movie = require('../controllers/index.controllers');

const router = Router();



router.get('/hero-slide', movie.heroSlide);

router.get('/videos-list/:id', movie.getVideoListTrailer)

router.get('/movies-list', movie.getMoviesList)

router.get('/tv-list', movie.getTvList)

router.get('/movies-keyword/:keyword', movie.getMoviesByKeyword)

router.get('/tv-keyword/:keyword', movie.getTvByKeyword)

router.get('/load-movies/:page', movie.loadMoreMovies)

router.get('/load-tv/:page', movie.loadMoreTv)

router.get('/load-movies-keyword/:keyword/:page', movie.loadMoreMoviesByKeyword)

router.get('/load-tv-keyword/:keyword/:page', movie.loadMoreTvByKeyword)

router.get('/movies-type/:type', movie.getMoviesByType)

router.get('/tv-type/:type', movie.getTvByType)

router.get('/movies-similar/:category/:id', movie.getMoviesBySimilar)

router.get('/videos/:category/:id', movie.getVideosList)

router.get('/detail/:category/:id', movie.getDetail)

router.get('/credits/:category/:id', movie.getCredits)



module.exports = router;