const express = require('express');
const { adminController } = require('../../controllers/admin/adminController');

const adminRoute = express("routes")




adminRoute.get('/students',adminController)

exports.adminRoutes = adminRoute;