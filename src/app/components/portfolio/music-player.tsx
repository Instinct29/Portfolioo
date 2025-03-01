"use client";
import { useState, useRef, useEffect, JSX } from "react";
import Image from "next/image";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Music,
    ChevronLeft,
    ChevronRight,
    ListMusic
} from "lucide-react";
import { Button } from "../ui/button";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Slider } from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Track {
    id: number;
    title: string;
    artist: string;
    cover: string;
    audioSrc: string;
}

interface SpotifyIconProps {
    className?: string;
}

interface NowPlayingProps {
    currentTrack: Track;
    isPlaying: boolean;
}

interface ProgressBarProps {
    currentTime: number;
    duration: number;
    onProgressChange: (value: number[]) => void;
}

interface PlaybackControlsProps {
    isPlaying: boolean;
    onPlayPause: () => void;
    onPrevTrack: () => void;
    onNextTrack: () => void;
}

interface VolumeControlsProps {
    volume: number;
    isMuted: boolean;
    onVolumeChange: (value: number[]) => void;
    onMuteToggle: () => void;
    onTogglePlaylist: () => void;
    showPlaylist: boolean;
}

interface PlaylistProps {
    tracks: Track[];
    currentTrackIndex: number;
    onSelectTrack: (index: number) => void;
    showPlaylist: boolean;
}

interface MusicPlayerProps {
    isVisible: boolean;
    toggleVisibility: () => void;
}

const tracks: Track[] = [
    {
        id: 1,
        title: "Ahista Ahista ",
        artist: "Kazinama",
        cover: "/music/cover/ahista.jpeg",
        audioSrc: "/music/Ahista.mp3",
    },
    {
        id: 2,
        title: "Die With A Smile",
        artist: "Lady Gaga, Bruno Mars",
        cover: "/music/cover/die.png",
        audioSrc: "/music/Diewithsmile.mp3",
    },
    {
        id: 3,
        title: "Ishq",
        artist: "Faheem Abdullah",
        cover: "/music/cover/ishq.jpeg",
        audioSrc: "/music/ishq.mp3",
    },
    {
        id: 4,
        title: "Levitating x Woh Ladki Jo",
        artist: "Dj Ruchir Mashup",
        cover: "/music/cover/dua.jpg",
        audioSrc: "/music/lavitaing.mp3",
    },
]

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const SpotifyIcon: React.FC<SpotifyIconProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5917 16.4083C16.3833 16.7167 16.0167 16.8 15.7083 16.5917C13.3833 15.175 10.475 14.8 6.88333 15.7C6.53333 15.7833 6.19167 15.575 6.10833 15.225C6.025 14.875 6.23333 14.5333 6.58333 14.45C10.5 13.4667 13.7333 13.9083 16.4083 15.525C16.7167 15.7333 16.8 16.1 16.5917 16.4083ZM17.85 13.5833C17.5833 13.9667 17.1167 14.0667 16.7333 13.8C14.0667 12.1583 10.1667 11.5917 6.86667 12.6917C6.43333 12.8167 5.96667 12.575 5.84167 12.1417C5.71667 11.7083 5.95833 11.2417 6.39167 11.1167C10.1667 9.85 14.5 10.4917 17.6333 12.4667C18.0167 12.7333 18.1167 13.2 17.85 13.5833ZM17.9667 10.6583C14.7833 8.75 9.38333 8.5 6.08333 9.53333C5.56667 9.675 5.01667 9.38333 4.875 8.86667C4.73333 8.35 5.025 7.8 5.54167 7.65833C9.31667 6.48333 15.2667 6.76667 18.9667 8.98333C19.425 9.25 19.55 9.83333 19.2833 10.2917C19.0167 10.75 18.4333 10.875 17.9667 10.6583Z" />
    </svg>
);

const NowPlaying: React.FC<NowPlayingProps> = ({ currentTrack, isPlaying }) => (
    <div className="mb-3 overflow-hidden rounded-lg bg-soft-gray">
        <div className="flex items-center pt-4">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-[#667085] border">
                <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? "animate-spin-slow" : ""}`}>
                    <SpotifyIcon className="h-10 text-[#c3c5c7] w-10" />
                </div>
            </div>
            <div className="ml-3 flex-1">
                <div className="text-sm text-steelGray">Now Listening to...</div>
                <div className="text-base font-medium text-gunmetal">
                    {currentTrack.title}
                </div>
                <div className="text-sm text-steelGray">{currentTrack.artist}</div>
            </div>
            <Image src={currentTrack.cover} alt="cover" width={60} height={60} />
        </div>
    </div>
);

const ProgressBar: React.FC<ProgressBarProps> = ({
    currentTime,
    duration,
    onProgressChange,
}) => (
    <div className="pb-2">
        <div className="pb-2 flex justify-between text-xs text-steel-gray">
            <span className="text-steelGray text-sm">{formatTime(currentTime)}</span>
            <span className="text-steelGray text-sm">-{formatTime(duration - currentTime)}</span>
        </div>
        <SliderPrimitive.Root
            value={[currentTime]}
            min={0}
            max={duration > 0 ? duration : 1}
            step={0.1}
            onValueChange={onProgressChange}
            className="relative flex h-1 w-full items-center rounded bg-[#f2f4f7]"
        >
            <SliderPrimitive.Track className="relative h-1 w-full rounded bg-light-gray">
                <SliderPrimitive.Range className="absolute h-full rounded bg-slateGray" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-slateGray" />
        </SliderPrimitive.Root>
    </div>
);

const PlaybackControls: React.FC<PlaybackControlsProps> = ({
    isPlaying,
    onPlayPause,
    onPrevTrack,
    onNextTrack,
}) => (
    <div className="flex items-center gap-1">
        <Button
            variant="ghost"
            size="icon"
            onClick={onPrevTrack}
            className="h-8 w-8 text-charcoal hover:bg-soft-gray hover:text-gunmetal"
        >
            <SkipBack className="text-[#667085]" size={16} />
        </Button>
        <Button
            variant="ghost"
            size="icon"
            onClick={onPlayPause}
            className="h-10 w-10 rounded-full bg-[#f2f4f7] flex items-center justify-center text-white"
        >
            {isPlaying ? (
                <Pause className="text-[#667085]" size={20} />
            ) : (
                <Play className="text-[#667085]" size={20} />
            )}
        </Button>
        <Button
            variant="ghost"
            size="icon"
            onClick={onNextTrack}
            className="h-8 w-8 text-charcoal hover:bg-soft-gray hover:text-gunmetal"
        >
            <SkipForward size={16} />
        </Button>
    </div>
);

const VolumeControls: React.FC<VolumeControlsProps> = ({
    volume,
    isMuted,
    onVolumeChange,
    onMuteToggle,
    onTogglePlaylist,
}) => (
    <div className="flex items-center gap-2">
        <Button
            variant="ghost"
            size="icon"
            onClick={onMuteToggle}
            className="h-8 w-8 text-charcoal hover:bg-soft-gray hover:text-gunmetal"
        >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </Button>
        <Slider
            value={[isMuted ? 0 : volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={onVolumeChange}
            className="relative w-24 h-1 bg-[#f2f4f7] cursor-pointer rounded-lg"
        >
            <div
                className="absolute top-0 cursor-pointer left-0 h-full bg-[#667085]"
                style={{ width: `${volume * 100}%` }}
            ></div>
            <div
                className="absolute cursor-pointer w-4 h-4 bg-[#667085] rounded-full shadow-md"
                style={{ left: `calc(${volume * 100}% - 8px)`, top: "-6px" }}
            ></div>
        </Slider>
        <Button
            variant="ghost"
            size="icon"
            onClick={onTogglePlaylist}
            className="h-8 w-8 text-charcoal hover:bg-soft-gray hover:text-gunmetal"
        >
            <ListMusic size={18} />
        </Button>
    </div>
);

const Playlist: React.FC<PlaylistProps> = ({
    tracks,
    currentTrackIndex,
    onSelectTrack,
    showPlaylist,
}) => (
    <div
        className={cn(
            "mt-3 overflow-hidden transition-all duration-300",
            showPlaylist ? "max-h-40" : "max-h-0"
        )}
    >
        <div className="rounded-lg">
            <h3 className="py-2 text-sm text-gunmetal">Playlist</h3>
            <ul className="space-y-0.5 max-h-32 overflow-y-auto">
                {tracks.map((track, index) => (
                    <li key={track.id}>
                        <button
                            onClick={() => onSelectTrack(index)}
                            className={cn(
                                "flex w-full items-center rounded-md px-2 py-1 text-left text-xs",
                                currentTrackIndex === index
                                    ? "bg-light-gray text-gunmetal"
                                    : "text-steel-gray hover:bg-light-gray/50"
                            )}
                        >
                            <Music size={12} className="mr-1.5 text-[#667085] flex-shrink-0" />
                            <span className="flex-1 text-sm text-steelGray truncate">
                                {track.title}
                            </span>
                            <span className="text-xs text-slateGray">{track.artist}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default function MusicPlayer({ isVisible, toggleVisibility }: MusicPlayerProps): JSX.Element {
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.7);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [showPlaylist, setShowPlaylist] = useState<boolean>(false);

    const audioRef = useRef<HTMLAudioElement>(null);
    const isPlayingRef = useRef<boolean>(false);

    const currentTrack = tracks[currentTrackIndex];

    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrackIndex, isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            isPlayingRef.current = isPlaying;
            const playPromise = isPlaying ? audio.play() : Promise.resolve();
            playPromise
                .then(() => {
                    if (!isPlayingRef.current) {
                        audio.pause();
                    }
                })
                .catch((error: Error) => {
                    console.error("Playback error:", error);
                });
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;
            const handleError = (e: Event) => {
                console.error("Audio error:", e);
                setIsPlaying(false);
            };
            audio.addEventListener("error", handleError);
            return () => {
                audio.removeEventListener("error", handleError);
            };
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const handlePlayPause = (): void => {
        if (audioRef.current) {
            isPlayingRef.current = !isPlaying;
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = (): void => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = (): void => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleProgressChange = (value: number[]): void => {
        if (audioRef.current) {
            const newTime = value[0];
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const handleVolumeChange = (value: number[]): void => {
        const newVolume = value[0];
        setVolume(newVolume);
        if (newVolume > 0 && isMuted) {
            setIsMuted(false);
        }
    };

    const handleMuteToggle = (): void => {
        setIsMuted(!isMuted);
    };

    const handleTrackEnded = (): void => {
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {
            setCurrentTrackIndex(0);
            setIsPlaying(false);
        }
    };

    const handlePrevTrack = (): void => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
        );
    };

    const handleNextTrack = (): void => {
        setCurrentTrackIndex((prevIndex) =>
            prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleSelectTrack = (index: number): void => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    };

    const togglePlaylist = (): void => {
        setShowPlaylist(!showPlaylist);
    };

    return (
        <div className="fixed bottom-[5.5rem] sm:bottom-10  sm:right-10 right-[0.5rem] z-50 flex items-center">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isVisible ? 0 : 420 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                // Use the toggle passed from props to close/open the player
                onClick={toggleVisibility}
                className="ml-2 h-8 w-8 rounded-full items-center justify-center flex cursor-pointer text-white"
            >
                {isVisible ? (
                    <ChevronRight className="text-[#667085]" size={20} />
                ) : (
                    <ChevronLeft className="text-[#667085]" size={20} />
                )}
            </motion.div>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isVisible ? 0 : 440 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="border rounded-[10px] w-[368] sm:w-[400px] overflow-hidden bg-white px-6 py-2 border-[#E8E8E8]"
            >
                <NowPlaying currentTrack={currentTrack} isPlaying={isPlaying} />
                <audio
                    ref={audioRef}
                    src={currentTrack.audioSrc}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleTrackEnded}
                />
                <ProgressBar
                    currentTime={currentTime}
                    duration={duration}
                    onProgressChange={handleProgressChange}
                />
                <div className="flex items-center mt-2 justify-between">
                    <PlaybackControls
                        isPlaying={isPlaying}
                        onPlayPause={handlePlayPause}
                        onPrevTrack={handlePrevTrack}
                        onNextTrack={handleNextTrack}
                    />
                    <VolumeControls
                        volume={volume}
                        isMuted={isMuted}
                        onVolumeChange={handleVolumeChange}
                        onMuteToggle={handleMuteToggle}
                        onTogglePlaylist={togglePlaylist}
                        showPlaylist={showPlaylist}
                    />
                </div>
                <Playlist
                    tracks={tracks}
                    currentTrackIndex={currentTrackIndex}
                    onSelectTrack={handleSelectTrack}
                    showPlaylist={showPlaylist}
                />
            </motion.div>
        </div>
    );
}
