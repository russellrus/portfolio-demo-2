import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ username: '', message: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);
    
    if (error) console.error('Error fetching messages:', error);
    else setMessages(data || []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic validation
    if (!form.username || !form.message || !form.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('guestbook')
      .insert([form]);

    if (error) {
      setError("Failed to send message. (Did you set up the Supabase table?)");
      console.error(error);
    } else {
      setForm({ username: '', message: '', password: '' });
      fetchMessages();
    }
    setLoading(false);
  };

  const handleDelete = async (id, passwordCheck) => {
    // In a real app, you'd verify this server-side or via RLS policy
    const promptPwd = prompt("Enter password to delete:");
    if (!promptPwd) return;

    // This is a simplified client-side check demonstration. 
    // Secure implementations should NEVER expose passwords to the client like this if fetching all columns.
    // Assuming we might have fetched it or we try to delete matching the password in the query.
    
    const { error } = await supabase
      .from('guestbook')
      .delete()
      .match({ id, password: promptPwd }); // Match ID and Password

    if (error) {
      alert("Delete failed! Wrong password?");
    } else {
      fetchMessages();
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-display text-accent mb-8 text-center">
          COMMUNICATION_LINK
        </h2>
        
        <div className="bg-gray-900 border-4 border-primary p-6 mb-12 shadow-2xl">
          <h3 className="text-xl text-secondary font-pixel mb-4 blink">
            {'>'} TRANSMIT_MESSAGE...
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="CODENAME (User)"
                className="w-1/2 bg-gray-800 border-2 border-gray-600 p-2 text-primary font-pixel focus:border-secondary focus:outline-none"
                value={form.username}
                onChange={e => setForm({...form, username: e.target.value})}
              />
              <input
                type="password"
                placeholder="SECRET KEY (Pass)"
                className="w-1/2 bg-gray-800 border-2 border-gray-600 p-2 text-primary font-pixel focus:border-secondary focus:outline-none"
                value={form.password}
                onChange={e => setForm({...form, password: e.target.value})}
              />
            </div>
            <textarea
              placeholder="ENTER MESSAGE..."
              rows="3"
              className="w-full bg-gray-800 border-2 border-gray-600 p-2 text-primary font-pixel focus:border-secondary focus:outline-none"
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
            ></textarea>
            
            {error && <p className="text-red-500 font-pixel">{error}</p>}
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full pixel-btn flex justify-center items-center"
            >
              {loading ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl text-tertiary font-pixel mb-4">
            {'>'} INCOMING_TRANSMISSIONS ({messages.length})
          </h3>
          
          {messages.length === 0 && (
            <p className="text-gray-500 font-pixel text-center">NO SIGNALS DETECTED.</p>
          )}

          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 border-l-4 border-tertiary p-4 relative"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-secondary font-bold font-display text-sm">
                  [{msg.username}]
                </span>
                <span className="text-gray-500 text-xs font-mono">
                  {new Date(msg.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-300 font-pixel text-lg">
                {msg.message}
              </p>
              <button 
                onClick={() => handleDelete(msg.id)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xs"
                title="Delete"
              >
                [X]
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
