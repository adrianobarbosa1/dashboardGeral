"use client";
import MenuDashboard from "@/componentes/MenuDashboard";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import data from "../../data/data.json";

const Dashboard = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Box
      margin="0"
      padding="0"
      overflow="hidden"
      backgroundColor="gray.100"
      backgroundImage={
        isImageLoaded ? "url('/images/background/martz.jpg')" : "none"
      }
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="calc(100vh - 3rem)"
    >
      <Image
        src="/images/background/martz.jpg"
        alt="Background"
        layout="fill"
        style={{ display: "none" }}
        quality={100}
        onLoadingComplete={handleImageLoad}
        priority
      />
      <Box display="flex" justifyContent="center" alignItems="center" p="1rem">
        <Box width="100%" maxWidth="1200px" p="1rem">
          <SimpleGrid minChildWidth="80px" spacing="20px">
            {data.dashboard.menu.map((menu) => (
              <MenuDashboard key={menu.id} menu={menu} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
