import Product from "../models/Product.js";
import Product from "../models/Product.js";

export const newProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product Successfully Deleted!" });
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const singleProduct = await Product.findById(id);
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getAllProduct = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.findOne().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json(error);
  }
};
