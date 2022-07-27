const config = require('../config');
const { fetch } = require('cross-fetch')



const category = {
    movie: 'movie',
    tv: 'tv'
}

const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}



const heroSlide = async (req, res) => {
    try {
        const response = await fetch(`${config.BASE_URL}/movie/${movieType.upcoming}?api_key=${config.API_KEY}`)

        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getVideoListTrailer = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`${config.BASE_URL}/${category.movie}/${id}/videos?api_key=${config.API_KEY}`)

        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getMoviesList = async (req, res) => {

    try {
        const response = await fetch(`${config.BASE_URL}/movie/${movieType.upcoming}?api_key=${config.API_KEY}`)
        const data = await response.json();

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getTvList = async (req, res) => {

    try {
        const response = await fetch(`${config.BASE_URL}/tv/${tvType.popular}?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getMoviesByKeyword = async (req, res) => {
    const { keyword } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/search/movie?api_key=${config.API_KEY}&query=${keyword}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getTvByKeyword = async (req, res) => {
    const { keyword } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/search/tv?api_key=${config.API_KEY}&query=${keyword}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const loadMoreMovies = async (req, res) => {
    const { page } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/movie/${movieType.upcoming}?api_key=${config.API_KEY}&page=${page}`)
        const data = await response.json();

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const loadMoreTv = async (req, res) => {
    const { page } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/tv/${tvType.popular}?api_key=${config.API_KEY}&page=${page}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const loadMoreMoviesByKeyword = async (req, res) => {
    const { keyword, page } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/search/movie?api_key=${config.API_KEY}&query=${keyword}&page=${page}`)
        const data = await response.json()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const loadMoreTvByKeyword = async (req, res) => {
    const { keyword, page } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/search/tv?api_key=${config.API_KEY}&query=${keyword}&page=${page}`)
        const data = await response.json()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getMoviesByType = async (req, res) => {
    const { type } = req.params;
    try {
        const response = await fetch(`${config.BASE_URL}/movie/${type}?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })

    }
}

const getTvByType = async (req, res) => {
    const { type } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/tv/${type}?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getMoviesBySimilar = async (req, res) => {
    const { id, category } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/${category}/${id}/similar?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }

}

const getVideosList = async (req, res) => {
    const { id, category } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/${category}/${id}/videos?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getDetail = async (req, res) => {
    const { id, category } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/${category}/${id}?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getCredits = async (req, res) => {
    const { id, category } = req.params;

    try {
        const response = await fetch(`${config.BASE_URL}/${category}/${id}/credits?api_key=${config.API_KEY}`)
        const data = await response.json()

        res.status(200).json(data)

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = {
    heroSlide,
    getVideoListTrailer,
    getMoviesList,
    getTvList,
    getMoviesByKeyword,
    getTvByKeyword,
    loadMoreMovies,
    loadMoreTv,
    loadMoreMoviesByKeyword,
    loadMoreTvByKeyword,
    getMoviesByType,
    getTvByType,
    getMoviesBySimilar,
    getVideosList,
    getDetail,
    getCredits
}
