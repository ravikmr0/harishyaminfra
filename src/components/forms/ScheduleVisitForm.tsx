import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

interface ScheduleVisitFormProps {
  onClose: () => void;
}

export default function ScheduleVisitForm({ onClose }: ScheduleVisitFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      budget: '',
      plotSize: '',
      location: '',
      visitDate: '',
      visitTime: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Schedule visit:', data);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  const progress = (step / 3) * 100;

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg font-semibold text-[#1a2332] mb-2">Booking Confirmed!</p>
        <p className="text-gray-600">We'll send you confirmation details via email</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">Step {step} of 3</span>
          <span className="text-sm text-gray-600">{progress.toFixed(0)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-[#1a2332]">Contact Information</h3>
          
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register('email', { required: 'Email is required' })}
              className="mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              {...register('phone', { required: 'Phone is required' })}
              className="mt-1"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
        </div>
      )}

      {/* Step 2: Preferences */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-[#1a2332]">Your Preferences</h3>
          
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50-75">₹50L - ₹75L</SelectItem>
                <SelectItem value="75-100">₹75L - ₹1Cr</SelectItem>
                <SelectItem value="100-150">₹1Cr - ₹1.5Cr</SelectItem>
                <SelectItem value="150+">₹1.5Cr+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="plotSize">Preferred Plot Size</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select plot size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000-1500">1000 - 1500 sq.ft</SelectItem>
                <SelectItem value="1500-2000">1500 - 2000 sq.ft</SelectItem>
                <SelectItem value="2000-2500">2000 - 2500 sq.ft</SelectItem>
                <SelectItem value="2500+">2500+ sq.ft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="location">Preferred Location</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shri-hari">Shri Hari Vatika</SelectItem>
                <SelectItem value="harishyam">Harishyam Township</SelectItem>
                <SelectItem value="both">Both Projects</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Step 3: Schedule */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-[#1a2332]">Schedule Your Visit</h3>
          
          <div>
            <Label htmlFor="visitDate">Preferred Date</Label>
            <Input
              id="visitDate"
              type="date"
              {...register('visitDate', { required: 'Date is required' })}
              className="mt-1"
            />
            {errors.visitDate && <p className="text-red-500 text-sm mt-1">{errors.visitDate.message}</p>}
          </div>

          <div>
            <Label htmlFor="visitTime">Preferred Time</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9-11">9:00 AM - 11:00 AM</SelectItem>
                <SelectItem value="11-1">11:00 AM - 1:00 PM</SelectItem>
                <SelectItem value="2-4">2:00 PM - 4:00 PM</SelectItem>
                <SelectItem value="4-6">4:00 PM - 6:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific questions or requirements?"
              {...register('message')}
              className="mt-1"
              rows={3}
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-3 pt-4">
        {step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(step - 1)}
            className="flex-1"
          >
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button
            type="button"
            onClick={() => setStep(step + 1)}
            className="flex-1 bg-[#1a2332] hover:bg-[#0f1419]"
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            className="flex-1 bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold"
          >
            Confirm Booking
          </Button>
        )}
      </div>
    </form>
  );
}
