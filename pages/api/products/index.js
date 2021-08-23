import nc from 'next-connect';

import dbConnect from '../../../config/dbConnect';
import { getAllProducts } from '../../../controller/productController';
import onError from '../../../utils/error';

const handler = nc({ onError });

dbConnect();

handler.get(getAllProducts);

export default handler;
