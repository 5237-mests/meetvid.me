// @ts-nocheck
"use client";
import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/hooks/useGetCalls';

const Home = () => {
  const { upcomingCalls } = useGetCalls();
  // I want to sort the upcoming calls by date
  upcomingCalls.sort((a, b) => new Date(a.state.startsAt) - new Date(b.state.startsAt));
  // i want to get the latest meeting
  const latestMeeting = upcomingCalls[0];
  const meetingdate = latestMeeting?.state?.startsAt

  const meetingDay = meetingdate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const meetingTime = meetingdate?.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  // CURRENT DATE
  const now = new Date();
  const time = now.toLocaleTimeString( 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true } );
  const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <section className='flex size-full flex-col text-white gap-10'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>
            {upcomingCalls.length > 0 ? (
              <>
                Upcoming Meeting at:
                <p>
                  {meetingDay} @ {meetingTime}
                </p>
              </>
            ) : ('No Upcoming Meeting')}
         
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home;
