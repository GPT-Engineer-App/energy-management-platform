import { useState } from "react";
import { Container, VStack, Text, Button, Input, FormControl, FormLabel, Select, Box, HStack, IconButton, useToast, Alert, AlertIcon, AlertTitle, AlertDescription, Image } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaBell, FaLightbulb, FaFileAlt, FaPlug, FaCommentDots } from "react-icons/fa";

const Index = () => {
  const [step, setStep] = useState(1);
  const [accountDetails, setAccountDetails] = useState({ username: "", email: "", password: "" });
  const [systemDetails, setSystemDetails] = useState({ deviceType: "", location: "" });
  const toast = useToast();

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSystemChange = (e) => {
    const { name, value } = e.target;
    setSystemDetails({ ...systemDetails, [name]: value });
  };

  const handleSubmit = () => {
    if (step === 1) {
      if (accountDetails.username && accountDetails.email && accountDetails.password) {
        setStep(2);
      } else {
        toast({
          title: "Error",
          description: "Please fill in all account details.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (step === 2) {
      if (systemDetails.deviceType && systemDetails.location) {
        toast({
          title: "Success",
          description: "Account and system setup complete.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setStep(3);
      } else {
        toast({
          title: "Error",
          description: "Please fill in all system details.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        {step === 1 && (
          <>
            <Text fontSize="2xl">Create an Account</Text>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" value={accountDetails.username} onChange={handleAccountChange} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={accountDetails.email} onChange={handleAccountChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={accountDetails.password} onChange={handleAccountChange} />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Next
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Text fontSize="2xl">System Details</Text>
            <FormControl id="deviceType">
              <FormLabel>Device Type</FormLabel>
              <Select name="deviceType" value={systemDetails.deviceType} onChange={handleSystemChange}>
                <option value="">Select device type</option>
                <option value="solar">Solar Panel</option>
                <option value="wind">Wind Turbine</option>
                <option value="battery">Battery Storage</option>
              </Select>
            </FormControl>
            <FormControl id="location">
              <FormLabel>Location</FormLabel>
              <Input type="text" name="location" value={systemDetails.location} onChange={handleSystemChange} />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Complete Setup
            </Button>
          </>
        )}
        {step === 3 && (
          <>
            <Text fontSize="2xl">Welcome to the Energy Management System</Text>
            <HStack spacing={4}>
              <IconButton aria-label="Real-Time Monitoring" icon={<FaChartLine />} size="lg" />
              <IconButton aria-label="Automated Alerts" icon={<FaBell />} size="lg" />
              <IconButton aria-label="Energy Optimization" icon={<FaLightbulb />} size="lg" />
              <IconButton aria-label="Compliance Reporting" icon={<FaFileAlt />} size="lg" />
              <IconButton aria-label="System Integration" icon={<FaPlug />} size="lg" />
              <IconButton aria-label="Feedback & Support" icon={<FaCommentDots />} size="lg" />
            </HStack>
            <Box mt={4}>
              <Alert status="info">
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Get Started!</AlertTitle>
                  <AlertDescription>Use the icons above to navigate through the EMS tool.</AlertDescription>
                </Box>
              </Alert>
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
