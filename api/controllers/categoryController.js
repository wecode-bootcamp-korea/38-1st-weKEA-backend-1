const { categoryService } = require('../services');
const { catchAsync } = require('../utils/error');

const categoryInfo = catchAsync(async(req, res) => {
    let { categoryId } = req.params;
    let { offset, limit, minPrice, maxPrice, sortBy } = req.query;

    if(!categoryId) {
        const error = new Error('KEY_ERROR');
        error.statusCode = 400;

        throw error
    }

    if(!offset) {
        const error = new Error('KEY_ERROR');
        error.statusCode = 400;

        throw error
    }

    if(!limit) {
        const error = new Error('KEY_ERROR');
        error.statusCode = 400;

        throw error
    }

    categoryId = +categoryId;
    offset = +offset;
    limit = +limit;
    minPrice = +minPrice;
    maxPrice = +maxPrice;

    console.log(categoryId, offset, limit, minPrice, maxPrice, "모음집")

    const getProductsByCategoryId = await categoryService.categoryService(categoryId, offset, limit, minPrice, maxPrice, sortBy);
    res.status(200).json({getProductsByCategoryId});
    
});

module.exports = {
    categoryInfo
}