import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-primary/10 backdrop-blur-md border-y border-primary/20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-head font-bold mb-6">Ready to dominate your market?</h2>
                <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                    Join the next generation of Indian businesses scaling with Techcure.
                </p>
                <a href="#contact" className="inline-block">
                    <Button size="lg" className="rounded-full px-8">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default CTA;
