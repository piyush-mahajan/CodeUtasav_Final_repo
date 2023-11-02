// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Life experiences have made me stronger. I've weathered the storms, faced
        challenges, and emerged with resilience. I've learned to appreciate the
        ups and downs that come with age. While trust has been tested, it
        remains a core value. I understand the importance of a helping hand,
        even when others let us down. Love may bring heartbreak, but it also
        teaches valuable lessons.
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Education"
          value="Truck Driver Training Institute"
        />
        <Information
          boxShadow={cardShadow}
          title="Languages"
          value="English, Spanish, Italian"
        />
        <Information
          boxShadow={cardShadow}
          title="Experiance"
          value="Ten Years"
        />
        <Information
          boxShadow={cardShadow}
          title="History"
          value="Logistics Solutions Inc., Transport Logistics Ltd."
        />
        <Information
          boxShadow={cardShadow}
          title="Organization"
          value="OnTheRoad Transports"
        />
        <Information
          boxShadow={cardShadow}
          title="Birthday"
          value="20 July 1986"
        />
      </SimpleGrid>
    </Card>
  );
}
