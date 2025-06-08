"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function GameFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])

  const genres = ["Action", "Adventure", "RPG", "Strategy", "Simulation", "Sports", "Racing", "Indie"]

  const features = [
    "Single-player",
    "Multi-player",
    "Online Co-op",
    "Controller Support",
    "VR Support",
    "Steam Achievements",
    "Steam Cloud",
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-white">Filters</h2>

      <Accordion type="multiple" defaultValue={["price", "genres"]}>
        <AccordionItem value="price" className="border-gray-700">
          <AccordionTrigger className="text-white hover:text-purple-400">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-gray-300">${priceRange[0]}</span>
                <span className="text-gray-300">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="genres" className="border-gray-700">
          <AccordionTrigger className="text-white hover:text-purple-400">Genres</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {genres.map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox id={`genre-${genre}`} />
                  <label
                    htmlFor={`genre-${genre}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                  >
                    {genre}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features" className="border-gray-700">
          <AccordionTrigger className="text-white hover:text-purple-400">Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox id={`feature-${feature}`} />
                  <label
                    htmlFor={`feature-${feature}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Apply Filters</Button>
        <Button variant="outline" className="w-full border-purple-600 text-purple-500 hover:bg-purple-950">
          Reset
        </Button>
      </div>
    </div>
  )
}
