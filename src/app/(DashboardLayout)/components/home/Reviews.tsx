import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Rating, Button, IconButton, Grid } from '@mui/material';
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
            fetch(`https://places.googleapis.com/v1/places/${process.env.NEXT_PUBLIC_KEY_BUSSINES}?fields=id,displayName,reviews&key=${process.env.NEXT_PUBLIC_API_KEY_GOOGLE}`)
                .then((res) => res.json()),
    });

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    if (!data || !data.reviews) return <div>No reviews available.</div>;

    const reviews = data.reviews;

    return (
        <Box sx={{ mt: 2, maxWidth: '100%' }}>
            <Grid container spacing={2} justifyContent="center">
                {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Box display="flex" justifyContent="space-between" mb={2}>
                                        <Rating name="read-only" value={review.rating} readOnly />
                                        <FcGoogle size={30} />
                                    </Box>
                                    <Typography gutterBottom mb={2} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                        {review.originalText.text}
                                    </Typography>
                                </Box>
                                <Box display="flex" mt={2}>
                                    <Avatar alt={review.authorAttribution.displayName} src={review.authorAttribution.photoUri} />
                                    <Box ml={2}>
                                        <Typography fontWeight="bold">{review.authorAttribution.displayName}</Typography>
                                        <Typography>{review.relativePublishTimeDescription}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
                <Button onClick={() => setCurrentReviewIndex((prevIndex) => (prevIndex - 3 + reviews.length) % reviews.length)} disabled={reviews.length <= 3}>Anterior</Button>
                <Box display="flex" mx={2}>
                    {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, pageIndex) => (
                        <IconButton key={pageIndex} size="small" color={(currentReviewIndex / 3) === pageIndex ? "primary" : "default"} onClick={() => setCurrentReviewIndex(pageIndex * 3)}>
                            <Circle />
                        </IconButton>
                    ))}
                </Box>
                <Button onClick={() => setCurrentReviewIndex((prevIndex) => (prevIndex + 3) % reviews.length)} disabled={reviews.length <= 3}>Siguiente</Button>
            </Box>
        </Box>
    );
}
