import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CallbackFormProps {
  onClose: () => void;
}

export default function CallbackForm({ onClose }: CallbackFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log('Callback request:', data);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-lg font-semibold text-[#1a2332] mb-2">Thank You!</p>
        <p className="text-gray-600">We'll call you back shortly</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          {...register('name', { required: 'Name is required' })}
          className="mt-1"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          placeholder="+91 98765 43210"
          {...register('phone', { required: 'Phone is required' })}
          className="mt-1"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>}
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
        {errors.email && <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>}
      </div>

      <div>
        <Label htmlFor="preferredTime">Preferred Time</Label>
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
        Request Callback
      </Button>
    </form>
  );
}