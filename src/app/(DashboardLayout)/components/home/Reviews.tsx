import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Rating, Button, IconButton } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Circle } from '@mui/icons-material';

const queryClient = new QueryClient();

export default function GoogleReviews() {
    return (
        <QueryClientProvider client={queryClient}>
            <GetGoogleReviews />
        </QueryClientProvider>
    );
}

function GetGoogleReviews() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['dataReviews'],
        queryFn: () =>
            fetch(`https://places.googleapis.com/v1/places/ChIJCcfIMGc3no8RHrdKPILPUu4?fields=id,displayName,reviews&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`)
                .then((res) => res.json()),
    });

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    if (!data || !data.reviews) return <div>No reviews available.</div>;

    const reviews = data.reviews;
    const currentReview = reviews[currentReviewIndex];

    const handleNext = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <Box sx={{ mt: 2, maxWidth: '100%' }}>
            <Box display="flex" justifyContent="center" p={2}>
                <Card sx={{ maxWidth: '100%', margin: 'auto' }}>
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" mb={2}>
                            <Rating name="read-only" value={currentReview.rating} readOnly />
                            <FcGoogle size={30} />
                        </Box>
                        <Typography gutterBottom mb={2}>{currentReview.originalText.text}</Typography>
                        <Box display="flex" mb={2}>
                            <Avatar alt={currentReview.authorAttribution.displayName} src={currentReview.authorAttribution.photoUri} />
                            <Box ml={2}>
                                <Typography fontWeight="bold">{currentReview.authorAttribution.displayName}</Typography>
                                <Typography>{currentReview.relativePublishTimeDescription}</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Button onClick={handlePrev} disabled={reviews.length <= 1}>Anterior</Button>
                <Box display="flex" mx={2}>
                    {reviews.map((_:any, index:number) => (
                        <IconButton key={index} size="small" color={index === currentReviewIndex ? "primary" : "default"} onClick={() => setCurrentReviewIndex(index)}>
                            <Circle />
                        </IconButton>
                    ))}
                </Box>
                <Button onClick={handleNext} disabled={reviews.length <= 1}>Siguiente</Button>
            </Box>
        </Box>
    );
}
