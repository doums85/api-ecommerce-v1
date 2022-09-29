import Product from '../models/productModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFeatures';

export const getAllProducts = catchAsync(async (req, res, next) => {
  let filter = {};

  const features = new APIFeatures(Product.find(filter), req.query)
    .filter()
    .sort()
    .limitFields();


  const data = await features.query.select('-__v').limit(200);

  if (!data) next(new AppError('No document found with that ID', 404));

  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      data,
    },
  });
});

export const getOne = catchAsync(async (req, res, next) => {
  let data;

  req.url.includes('model')
    ? (data = await Product.find({ 'model.model_id': req.query.id }))
    : (data = await Product.findById(req.query.id));

  if (!data) next(new AppError('No document found with that ID', 404));

  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      data,
    },
  });
});
