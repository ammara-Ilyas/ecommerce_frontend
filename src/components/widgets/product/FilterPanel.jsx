"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "@/redux/silice/ProductSlice";
const categories = ["Category A", "Category B", "Category C", "Category D"];
const tags = ["New", "Popular", "Trending", "Featured"];

const FilterPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const [priceRange, setPriceRange] = useState([100, 4544]);

  // Category filter
  const handleCategoryClick = (category) => {
    const filtered = products.filter((p) => p.category === category);
    dispatch(setFilteredProducts(filtered));
  };

  // Price slider filter
  const handlePriceChange = (e, newValue) => {
    setPriceRange(newValue);
    const filtered = products.filter(
      (p) => p.price >= newValue[0] && p.price <= newValue[1]
    );
    dispatch(setFilteredProducts(filtered));
  };

  // Rating filter
  const handleRatingClick = (rating) => {
    const filtered = products.filter((p) => Math.floor(p.rating) >= rating);
    dispatch(setFilteredProducts(filtered));
  };

  return (
    <Box width="250px" sx={{ p: 2 }}>
      {/* Categories */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">All Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {categories.map((cat, i) => (
            <Box
              key={i}
              sx={{ cursor: "pointer", mb: 1 }}
              onClick={() => handleCategoryClick(cat)}
            >
              <Typography variant="body2">{cat}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Price */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={100}
            max={4544}
            valueLabelDisplay="auto"
            sx={{ color: "green" }}
          />
          <Typography variant="body2">
            Price: {priceRange[0]} - {priceRange[1]}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Ratings */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {[5, 4, 3, 2].map((star, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                mb: 1,
              }}
              onClick={() => handleRatingClick(star)}
            >
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <StarIcon
                    key={idx}
                    color={idx < star ? "warning" : "disabled"}
                    fontSize="small"
                  />
                ))}
              <Typography variant="body2" sx={{ ml: 1 }}>
                {star}.0 & up
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Popular Tags (optional - no logic yet) */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1">Popular Tag</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.map((tag, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: "#f0f0f0",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "12px",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                {tag}
              </Box>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterPanel;
