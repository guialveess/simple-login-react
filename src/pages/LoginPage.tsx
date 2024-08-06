import React from 'react';
import { Card } from '@/components/ui/card';
import CardContent from './components/CardContent';
import CardFooter from './components/CardFooter';
import CardHeader from './components/CardHeader';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[344px] font-inter space-y-5 my-5">
                <CardHeader />
                <CardContent />
                <CardFooter />
            </Card>
        </div>
    );
};

export default LoginPage;
